import { Injectable } from '@angular/core';
import { Document } from './documents';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const documents = [
      { id: 1, title: '문서', content: `Angular 가이드문서 소개 Angular 가이드 문서는 프로토타입부터 대규모 기업용 앱에도 활용할 수 있는 Angular 플랫폼과 프레임워크에 대해 소개합니다.
      튜토리얼과 가이드문서에서 설명하는 예제 코드는 다운받아 로컬 환경에서 직접 실행해볼 수도 있습니다.
            <section>자세히 알아보기</section>`},
      { id: 2, title: '시작하기', content: '2번 문서 내용 !!!222222222222222222222222222222222222222222222222222222222222222'},
      { id: 3, title: '환경설정', content: '3번 문서 내용 @@@33333333333333333333333333333333333333333333333333333'},
      { id: 4, title: '기초 지식', content: '4번 문서 내용 ####4444444444444444444444444444444444444444444444444444444444444444'},
      { id: 5, title: '고급', content: '5번 문서 내용 $$$$$55555555555555555555555555555555555555555555555555555555555555555555'},
      { id: 6, title: '개발 단계', content: '6번 문서 내용 %%%%%%%6666666666666666666666666666666666666666666666'},
      { id: 7, title: '개발환경 설정', content: '7번 문서 내용 ^^^^^^77777777777777777777777777777777777777777777'},
      { id: 8, title: '릴리즈 정보', content: '8번 문서 내용 &&&&&&&&&&&8888888888888888888888888888888888888888888888888888888888888'},
    ];
   return {documents};
  }

  getId(documents: Document[]): number {
    return documents.length > 0 ? Math.max(...documents.map(document => document.id)) + 1 : 11;
  }
}
