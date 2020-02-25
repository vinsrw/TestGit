import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiniYoutubeService {

  constructor(private http: HttpClient) { }

  getVideos(link: string)
  {
      return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyDOawekAIAempdb07pgPzFtzVyyfGd2pSM&q=${link}`)

    // return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyCAhydUKofxnF4DGHF1sPk1H83F9809PaQ&q=${link}`)

    // return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyB6zPxyluEDSsz9ntgB19aQTUqAE0_g3dw&q=${link}`)
  }
}
