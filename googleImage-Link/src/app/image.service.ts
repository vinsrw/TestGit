import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
searched: string='';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Object>
  {
   // return this.http.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAWj1et2xbJayGE5CFBaNKwZ1f_YfxtjPI&cx=017576662512468239146:omuauf_lfve&q=${imageKey}&callback=hndlr`);
  // return this.http.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAqkfRVQB0PaHWEF-dquu1Y9zDiGbBZ0AI&cx=017576662512468239146:omuauf_lfve&q=cars`);

    return this.http.get(`https://api.unsplash.com/search/photos?query=`+this.searched+`&client_id=c2d234ff4e3fb504799ffd3fa309caf46de9da54dbd46b68b7445b14357b4b3c`);
  }

  getLinks()
  {

   // return this.http.get(`http://api.serpstack.com/search?access_key=1ec376ac3a74621a2797622e443dc9cd&query=`+this.searched);
    return this.http.get(`http://api.serpstack.com/search?access_key=c015d3dd3c85d785112d37e83876b55f=`+this.searched);

  }

  getVideos()
  {
     // return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyDOawekAIAempdb07pgPzFtzVyyfGd2pSM&q=`+this.searched)

    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyCAhydUKofxnF4DGHF1sPk1H83F9809PaQ&q=`+this.searched)

    // return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyB6zPxyluEDSsz9ntgB19aQTUqAE0_g3dw&q=${link}`)
  }
}
