import React from 'react';

// component
import { Container } from 'components/common/layout';

const User = ({ user }) => {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
};

const UserList = () => {
    const users = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
    ];

    return (
        <Container>
            {/* 
                리액트에서 key가 중요한 이유 ?

                const array = ['a', 'b', 'c', 'd'];
                b와 c 사이에 z를 넣을 때 생기는 일
                => 기존의 c 가 z 로바뀌고, d 는 c 로 바뀌고, 맨 마지막에 d 가 새로 삽입됩니다.
                그 다음에 a 를 제거하게 된다면, 기존의 a 가 b 로 바뀌고, b 는 z 로 바뀌고, z는 c로 바뀌고, c는 d 로바뀌고, 맨 마지막에 있는 d 가 제거됩니다.

                배열이 업데이트 될 때 key를 준다면?
                리액트는 똑똑하게 기존 키들의 값이 바뀌지 않았다면 새로 추가된 키와 값만 리랜더한다,
                기존 키의 값이 변경됐다면 그 키의 값만 리렌더링 된다.
                [                    
                    key: 0,  {id:0, title: 'hello!', content:'word'},
                    key: 1,  {id:1, title: 'myname!', content:'is!'},
                    key: 2,  {id:2, title: 'lee!', content:'yong!'},
                    key: 3,  {id:3, title: 'jun!', content:'blabla!'}
                ];

                map 함수의 index로 key를 줄 때 곤란한 이유
                key: 0,  {id:4, title: 'add!', content:'yeah!'},
                key: 1,  {id:0, title: 'hello!', content:'word'},
                key: 2,  {id:1, title: 'myname!', content:'is!'},
                key: 3,  {id:2, title: 'lee!', content:'yong!'},
                key: 4,  {id:3, title: 'jun!', content:'blabla!'}

                간단하게 리액트의 키는 그 요소에 특정 이름을 준다고 생각하면 된다.
                그러나 map 함수의 index로 해버리면 중간에 넣거나 맨앞에 넣는 순간
                기존 key 0에는 항상 {id:0, title: 'hello!', content:'word'}이 들어있어야하는데 
                다른 값이 들어가게 되면서 리액트가 새로운 배열을 넣었다고 판단하게 만들고 전체를 리렌더링해버린다.
            */}
            {
                users.map(user => {
                    return <User user={user} key={user.id}/>
                })
            }
        </Container>
    );
};

export default UserList;