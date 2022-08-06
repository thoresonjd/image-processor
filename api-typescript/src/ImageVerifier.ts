import * as fs from 'fs';

class ImageVerifier {

    private supportedTypes: Record<string, string>;

    constructor() {
        this.supportedTypes = JSON.parse(fs.readFileSync('src/MIMETypes.json').toString());
    }

    public hasImage(image: string | undefined): boolean {
        return !!image || typeof image !== 'undefined';
    }

    public isSupportedImage(image: string): boolean {
        for (let mimeType in this.supportedTypes)
            if (image.startsWith(mimeType))
                return true;
        return false;
    }
}

export { ImageVerifier }