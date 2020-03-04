import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  common: string = 'Tiger'

  constructor(public http: HttpClient) { }
  listimages(): Observable<Object> {
    return this.http.get(`https://api.unsplash.com/search/photos?query= `+this.common+ `&client_id=e4ef23121332ac1895c004394535de56efe2b18825b6effa3b08ba58bcdcf3f5`);

   }

   listLinks(): Observable<Object> {
    return this.http.get(`http://api.serpstack.com/search?access_key=675a0112b38528798cb98f04435271a2&query=`+this.common);
    

   }

   listVideos(): Observable<Object> {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + "AIzaSyC9pTL_w-okkQrWoNPcts1NfLirDoN-4DY" +'&q='+ this.common + '&part=snippet&type=video,id&maxResults=5')
  }


}

