class Place {
    constructor(title, address, image, lot = 75.75, lan = 75.75) {
        this.id = Date.now().toString(16);
        this.title = title;
        this.address = address;
        this.image = image;
        this.lot = lot;
        this.lan = lan;
    }
}

export default Place;