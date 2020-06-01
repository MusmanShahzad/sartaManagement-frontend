import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtensionDataService {
imageExt=['.jpeg','.jpg','.png','.gif','.tiff','.svg','.jfif','.fif','.psd','.raw','.indd'];
videoExt=['.mkv','.webm','.mpg','.mp2','.mpeg','.mpe','.mpv','.ogg','.mp4','.m4p','.m4v','.avi','.wmv','.mov','.qt','.flv','.swf','.avchd']

constructor() { }
checkImageExtension(url){
  let ext = url.split('.').pop();
    let out =this.imageExt.find(imgExt=>{
      return imgExt ==='.'+ext
    });
    return out&&out.length > 0;
}
checkVideoExtension(url){
  let ext = url.split('.').pop();
    let out =this.videoExt.find(imgExt=>{
      return imgExt ==='.'+ext
    });
    return out&&out.length > 0;
}
}
