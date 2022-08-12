class CatalogItem {
    constructor(id, title, tags) {
        this._id = id;
        this._title = title;
        this._tags = tags
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    hasTag(arg) {
        return this._tags.includes(arg)
    }
}

class Scroll {
    constructor(id, title, tags, dateLastCleaned, catalogId, catalog) {
        this._id = id;
        this._title = title;
        this._lastCleaned = dateLastCleaned;
        this._catalogItem =  catalog.getItem(catalogId);  
    }

    get id() {
        return this._catalogItem.id;
    }

    get title() {
        return this._catalogItem.title
    }

    hasTag(aString) {
        return this._catalogItem.hasTag(aString)
    }

    needCleaning(targetDate) {
        const threshold = this.hasTag('revered') ? 700 : 1500;
        return this.daySinceLastCleaning(targetDate) > threshold;
    }

    daySinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS)
    }
}

const scrolls = aDocument.map(record => new Scroll(record.id, record.title,  record.lastCleaned,  record.catalogData.id, catalog));