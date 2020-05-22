export interface FileItemModel {
    Path?: string;
    Uuid: string;
    Status: 'loading' | 'ready';
}

export function ValidateFileItem(fileItem: FileItemModel): string | null {
    // if (!fileItem.Name || fileItem.Name.length === 0) {
    //     return 'Invalid file name';
    // }
    // if (!fileItem.Extension || fileItem.Extension.length === 0) {
    //     return 'Invalid file extension';
    // }

    return null;
}
