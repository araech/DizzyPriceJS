/* DizzyPriceJS
 * Copyright 2024 by Aubrey Raech
 *
 * This program is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 */

class DpOptions {
    constructor(version = "v36", cha = 10, otype = "+", price = 0, buying = true, desc = "",
            dunce = false, tourist = false, credit = false) {
        this.version = version;
        this.cha = cha;
        this.otype = otype;
        this.price = price;
        this.buying = buying;
        this.desc = desc;
        this.dunce = dunce;
        this.tourist = tourist;
        this.credit = credit;
    }
}

class DizzyPrice36 {
    constructor() {
        // FIXME probability should be calculated for the given Nethack version
        this.probs = {
            '+': this.getProbTotalForType('+'),
            '/': this.getProbTotalForType('/'),
            '!': this.getProbTotalForType('!'),
            '?': this.getProbTotalForType('?'),
            '=': this.getProbTotalForType('='),
            '(': this.getProbTotalForType('('),
            '*': this.getProbTotalForType('*'),
            ')': this.getProbTotalForType(')'),
            '[': this.getProbTotalForType('[')
        }
    }

    calcProb(numer, denom) {
        return (numer / denom).toFixed(3);
    }

    // FIXME probability should be calculated for the given Nethack version
    makeObj(line, glyph) {
        return {
            id: line[0],
            desc: line[1],
            prob: this.calcProb(line[2], this.probs[glyph]),
            price: line[3]
        }
    }

    conductQuery(opts) {
        const gotten = this.doPriceSearch(opts);
        if (gotten.length == 0) {
            return "<p> No results.</p>";
        } else {
            return this.getTableHTML(gotten.sort((a, b) => a.prob < b.prob), opts.price);
        }
    }

    debutObjList(objs) {
        var str = "[";
        for (const o of objs) {
            str += JSON.stringify(Object.entries(o)) + ",";
        }
        return str + "]"
    }

    getType(version, kind) {

        if (version == "v34") {
            switch(kind) {
                case '+': return Items34.spellbooks.map(x => this.makeObj(x, kind));
                case '/': return Items34.wands.map(x => this.makeObj(x, kind));
                case '!': return Items34.potions.map(x => this.makeObj(x, kind));
                case '?': return Items34.scrolls.map(x => this.makeObj(x, kind));
                case '=': return Items34.rings.map(x => this.makeObj(x, kind));
                case '(': return Items34.tools.map(x => this.makeObj(x, kind));
                case '*': return Items34.stones.map(x => this.makeObj(x, kind));
                case ')': return Items34.weapons.map(x => this.makeObj(x, kind));
                case '[': return Items34.armor.map(x => this.makeObj(x, kind));
                default: return []
            }
        }
        if (version == "v36") {
            switch(kind) {
                case '+': return Items36.spellbooks.map(x => this.makeObj(x, kind));
                case '/': return Items36.wands.map(x => this.makeObj(x, kind));
                case '!': return Items36.potions.map(x => this.makeObj(x, kind));
                case '?': return Items36.scrolls.map(x => this.makeObj(x, kind));
                case '=': return Items36.rings.map(x => this.makeObj(x, kind));
                case '(': return Items36.tools.map(x => this.makeObj(x, kind));
                case '*': return Items36.stones.map(x => this.makeObj(x, kind));
                case ')': return Items36.weapons.map(x => this.makeObj(x, kind));
                case '[': return Items36.armor.map(x => this.makeObj(x, kind));
                default: return []
            }
        }
        else if (version == "v37") {
            switch(kind) {
                case '+': return Items37.spellbooks.map(x => this.makeObj(x, kind));
                case '/': return Items37.wands.map(x => this.makeObj(x, kind));
                case '!': return Items37.potions.map(x => this.makeObj(x, kind));
                case '?': return Items37.scrolls.map(x => this.makeObj(x, kind));
                case '=': return Items37.rings.map(x => this.makeObj(x, kind));
                case '(': return Items37.tools.map(x => this.makeObj(x, kind));
                case '*': return Items37.stones.map(x => this.makeObj(x, kind));
                case ')': return Items37.weapons.map(x => this.makeObj(x, kind));
                case '[': return Items37.armor.map(x => this.makeObj(x, kind));
                default: return []
            }
        }
        return [];
    }

    // If a description filter is provided, run a search through the id and desc
    //   fields for *each* space-separated term, and only return true if *every*
    //   term provided appears somewhere on the object.
    // This is so "buckled boots" will correctly match every shuffled desc boots, etc.
    grepMatches(x, grep) {
        var terms = grep.split(' ');
        for (var i = 0; i < terms.length; i++) {
            if (!(x.desc.includes(terms[i]) || x.id.includes(terms[i]))) {
                return false;
            }
        }
        return true;
    }

    doPriceSearch(opts) {
        if (opts.constructor.name != "DpOptions") { return []; }
        var rawList = this.getType(opts.version, opts.otype).map(x => Object.create(x)); // use COPIES
        if (rawList.length == 0) return [];
        var results = [];
        
        if (opts.otype == "(" || opts.otype == ")" || opts.otype == "[") {
            let grep = opts.desc.toLowerCase().trim();
            if (opts.desc.length > 0) {
                rawList = rawList.filter(x => this.grepMatches(x, grep));
            }
        }

        // expand enchantments
        if (opts.otype == ")" || opts.otype == "[") {
            let expList = [];
            for (const item of rawList) {
                expList.push(...(this.expandEnchantments(item)))
            }
            rawList = expList;
        }

        // filter for price matches on newly formed list
        for (var i = 0; i < rawList.length; i++) {
            let item = this.objToResult(opts, rawList[i]);
            if (opts.price == item.pricea || opts.price == item.priceb) {
                item.prob = item.prob * ((opts.price == item.pricea) ? 0.75 : 0.25);
                results.push(item)
            }
        }

        // re-weigh enchanted things to lesser probability
        for (var i = 0; i < results.length; i++) {
            if (results[i].id.match(/\+[1-7]/)) {
                results[i].prob *= 0.25; // FIXME inaccurate, BUT ENOUGH
            }
        }
        return results;
    }

    objToResult(opts, obj) {
        var prices = [0, 0];

        if (opts.version == "v34") {
            if (opts.buying) {
                prices = this.getBuyingPrices34(obj.price, opts);
            } else {
                prices = this.getSellingPrices34(obj.price, opts);
            }
        }
        else if (opts.version == "v36" || opts.version == "v37") {
            if (opts.buying) {
                prices = this.applySaleMods(obj.price, this.getBuyMods(opts), false);
            } else {
                prices = this.applySaleMods(obj.price, this.getSellMods(opts), opts.credit);
            }
        }
        
        return {
            id: obj.id,
            desc: obj.desc,
            prob: obj.prob,
            price: obj.price,
            pricea: prices[0],
            priceb: prices[1]
        }
    }

    filterForDesc(list, grep) {
        let matches = [];
        for (const item of list) {
            if (item.desc.includes(grep)) {
                matches.push(item)
            }
        }
        return matches;
    }

    expandEnchantments(obj) {
        let objs = [];
        for (var i = 0; i <= 7; i++) {
            objs.push({
                id: `+${i} ${obj.id}`,
                desc: obj.desc,
                prob: obj.prob,
                price: (obj.price + (10 * i))
            })
        }
        return objs;
    }

    getProbTotal(raw) {
        return raw.reduce((acc, cur) => acc + cur[2], 0)
    }

    getProbTotalForType(glyph) {
        switch(glyph) {
            case '+': return this.getProbTotal(Items36.spellbooks);
            case '/': return this.getProbTotal(Items36.wands);
            case '!': return this.getProbTotal(Items36.potions);
            case '?': return this.getProbTotal(Items36.scrolls);
            case '=': return this.getProbTotal(Items36.rings);
            case '(': return this.getProbTotal(Items36.tools);
            case '*': return this.getProbTotal(Items36.stones);
            case ')': return this.getProbTotal(Items36.weapons);
            case '[': return this.getProbTotal(Items36.armor);
        }
    }

    getBuyMods(opts) {
        let mult = 1;
        let divi = 1;

        if (opts.tourist || opts.dunce) {
            mult *= 4;
            divi *= 3;
        }

        if (opts.cha > 18) {
            divi *= 2;
        } else if (opts.cha == 18) {
            mult *= 2;
            divi *= 3;
        } else if (opts.cha >= 16) {
            mult *= 3;
            divi *= 4;
        } else if (opts.cha <= 5) {
            mult *= 2;
        } else if (opts.cha <= 7) {
            mult *= 3;
            divi *= 2;
        } else if (opts.cha <= 10) {
            mult *= 4;
            divi *= 3;
        }

        let pricea = [mult, divi];
        let priceb = [mult * 4, divi * 3];
        return [pricea, priceb];
    }

    getSellMods(opts) {
        let mult = 1;
        let divi = 1;

        divi *= ((opts.tourist || opts.dunce) ? 3 : 2);

        let offera = [mult, divi];
        let offerb = [mult * 3, divi * 4];
        return [offera, offerb];
    }

    applySaleMod(base, mod) {
        let price = base * mod[0];
        if (mod[1] > 1) {
            price *= 10;
            price = ~~(price / mod[1]);
            price += 5;
            price = ~~(price / 10);
        }
        if (price < 1) {
            price = 1;
        }
        return price;
    }

    applySaleMods(base, mods, credit = false) {
        let prices = [
            this.applySaleMod(base, mods[0]),
            this.applySaleMod(base, mods[1])
        ];

        if (!!credit) {
            return prices.map(p => (~~((p * 9) / 10) + (p <= 1 ? 1 : 0)));
        } else {
            return prices;
        }
    }

    getBuyingPrices34(price, opts) {
        var prices = [price, price + ~~(price / 3)];

        if (opts.tourist || opts.dunce) {
            prices = prices.map(x => x + ~~(x / 3));
        }

        if (opts.cha > 18) {
            prices = prices.map(x => ~~(x / 2))
        } else if (opts.cha == 18) {
            prices = prices.map(x => x - ~~(x / 3));
        } else if (opts.cha >= 16) {
            prices = prices.map(x => x - ~~(x / 4));
        } else if (opts.cha <= 5) {
            prices = prices.map(x => x * 2);
        } else if (opts.cha <= 7) {
            prices = prices.map(x => x + ~~(x / 2));
        } else if (opts.cha <= 10) {
            prices = prices.map(x => x + ~~(x / 3))
        }

        return prices;

    }
    getSellingPrices34(price, opts) {
        var sprice = (opts.tourist || opts.dunce) ? ~~(price / 3) : ~~(price / 2);
        return [sprice, sprice - ~~(sprice / 4)];
    }

    pclassString(pmatch, pquery) {
        return (pmatch == pquery) ? `<td class="pmatch">${pmatch}</td>` : `<td>${pmatch}</td>`;
    }

    getTableHTML(arr, pquery) {
        var str = "<table>";
        str += `<tr><th>Item</th><th>Prob</th><th>Base</th><th>Price A</th><th>Price B</th></tr>`;
        for (const x of arr) {
            str += `<tr><td>${x.id}</td><td>${(x.prob * 100).toFixed(2)}%</td><td class="tprice">${x.price}</td>`;
            str += `${this.pclassString(x.pricea, pquery)}${this.pclassString(x.priceb, pquery)}</tr>`;
        }
        return str + "</table>";
    }
}