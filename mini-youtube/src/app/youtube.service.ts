import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
 
  constructor(public http: HttpClient) { }
  listVideos(abc: string): Observable<Object> {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + "AIzaSyB4lFl5drX5yWG_u7ZVUz-89OBou_TE3dI" +'&q='+ abc + '&part=snippet&type=video,id&maxResults=5')
  }
}
