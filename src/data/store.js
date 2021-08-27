const store = {
    owners: [
        {id: 1, key:'qwerty', name: 'Kyrylo', reputation: 'High', date: '23.12.2020', votes: 'votes', answer: 'answer', views: 'views',
        img: 'https://www.dallalii.com/img/admin/avatar5.png', location: 'Kyiv', favoriteTags: 'JS, React.js'},
        {id: 2, key:'qwerty2', name: 'Dmitriy', reputation: 'middle', date: '23.12.1820', votes: 'votes2', answer: 'answer2', views: 'views2',
        img: 'https://www.dallalii.com/img/admin/avatar5.png', location: 'London', favoriteTags: 'PHP, CSS'},
        {id: 3, key:'qwerty3', name: 'Arnold', reputation: 'low', date: '23.12.2010', votes: 'votes3', answer: 'answer3', views: 'views3',
        img: 'https://www.dallalii.com/img/admin/avatar5.png', location: 'Paris', favoriteTags: 'C, C++'},
    ],
    tagsInfo: [
        {id: 55, tagName: 'javascript', totalNumberQuestion: '3423432', askedToday: '807', 
        text: 'For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript).'},
        {id: 56, tagName: 'java', totalNumberQuestion: '3423432', askedToday: '333807',
        text: 'For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript).'},
        {id: 57, tagName: 'python', totalNumberQuestion: '3412312', askedToday: '4443807',
        text: 'For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript).'},
        {id: 58, tagName: 'C#', totalNumberQuestion: '34236877972', askedToday: '1807',
        text: 'For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript).'},
        {id: 59, tagName: 'C++', totalNumberQuestion: '32', askedToday: '807',
        text: 'For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript).'},
    ],
    profileInfo: [
        {id: 44, reputation: 23, posts: 234, questions: 54, answers: 22, coments: 3, favorites: 5,  notifications: 77, privelegies: 'privelegies', tags: 3, bages: 'STAR'},
        {id: 45, reputation: 22, posts: 224, questions: 547, answers: 224, coments: 31, favorites: 50,  notifications: 727, privelegies: 'privelegies2', tags: 3, bages: 'STAR'},
        {id: 46, reputation: 277, posts: 3454, questions: 542, answers: 223333, coments: 30, favorites: 540,  notifications: 7237, privelegies: 'privelegies3', tags: 3, bages: 'STAR'}
    ]
}

export default store;