class Place {
    constructor(title, address, image) {
        this.id = Date.now().toString(16);
        this.title = title;
        this.address = address;
        this.image = image;
    }
}

export default Place;