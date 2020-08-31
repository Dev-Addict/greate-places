class Place {
    constructor(title, address, image, lat = 75.75, lon = 75.75) {
        this.id = Date.now().toString(16);
        this.title = title;
        this.address = address;
        this.image = image;
        this.lat = lat;
        this.lon = lon;
    }
}

export default Place;