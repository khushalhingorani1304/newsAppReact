import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  article = [
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "England in New Zealand: Judgement day for Bazball is upon us",
        "description": "The tour of New Zealand begins a defining year for England under Ben Stokes and Brendon McCullum, writes chief cricket reporter Stephan Shemilt.",
        "url": "http://www.bbc.co.uk/sport/cricket/articles/c1kndplm81eo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/1959/live/71b96be0-ac90-11ef-9d45-751faac6a2f5.jpg",
        "publishedAt": "2024-11-27T11:22:21.4701575Z",
        "content": "In Christchurch, the city of his birth, Stokes is born again. Physically fit and back to his ebullient self. \r\nAs usual, he politely fends off suggestions that this is a homecoming - \"I'm English\" - … [+1960 chars]"
    },
    {
        "source": {
            "id": "news-com-au",
            "name": "News.com.au"
        },
        "author": "James Dampney",
        "title": "Umpire’s shock call after gruesome injury",
        "description": "The umpire that made global headlines after he was struck by a cricket ball has made a surprise admission about his ordeal.",
        "url": "https://www.news.com.au/sport/cricket/perth-cricket-umpire-breaks-silence-after-gruesome-injury/news-story/e152e58f88840bdeb0483d340b1ce548",
        "urlToImage": "https://content.api.news/v3/images/bin/f21eec395dc79d854dbcea544850856a",
        "publishedAt": "2024-11-27T08:50:00Z",
        "content": "The umpire that made global headlines after he was struck by a cricket ball has made a surprise admission about his ordeal.\r\nSenior umpire Tony DeNobrega took a full-blooded straight drive to the fac… [+3706 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]

  constructor(){
    super();
    console.log("Hello i am a constructor from News Component");
    this.state = {
      article : this.article,
      loading : false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
            <div className="col col-md-4">
            <NewsItem title="myTitle" description="myDesc" imageUrl = "https://ichef.bbci.co.uk/news/1024/branded_sport/1959/live/71b96be0-ac90-11ef-9d45-751faac6a2f5.jpg" newsUrl = "TODO"/>
            </div>
            <div className="col col-md-4">
            <NewsItem title="myTitle" description="myDesc"/>
            </div>
            <div className="col col-md-4">
            <NewsItem title="myTitle" description="myDesc"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
