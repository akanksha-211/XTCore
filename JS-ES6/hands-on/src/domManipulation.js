
export const userName = _ => {
    const urls = [
        'https://api.github.com/users/rajeevjain1983',
        'https://api.github.com/users/akanksha-211',
        'https://api.github.com/users/CodeWithAnkitSinghal',
        'https://api.github.com/users/adishmodi',
        'https://api.github.com/users/goldy28',
        'https://api.github.com/users/vinamrasingh',
        'https://api.github.com/users/rohit-khanna',
        'https://api.github.com/users/sanjaybhatt0621',
        'https://api.github.com/users/JugalJoshi8',
        'https://api.github.com/users/rohngonnarock',
        'https://api.github.com/users/vivek-khokhar',
        'https://api.github.com/users/SidVedi',
        'https://api.github.com/users/ajayp944',
        'https://api.github.com/users/rao7'
    ];
    const promises = urls.map(url => {
        return fetch(url);
    });
    function addHighlightClass(node){
        console.dir(node);
    }
    Promise.all(promises)
        .then((res) => {
            let list = document.createElement('ol');
            list.className = 'list-group';
            document.body.appendChild(list);
            res.forEach(userResponse => {
            userResponse.json()
                .then((user) => {
                    var list_item = document.createElement('li');
                    list_item.className = 'list-group-item';
                    list_item.innerHTML=`User Name: ${user.name}, User ID: ${user.login}`;
                    // list_item.mouseover = addHighlightClass(list_item);
                    list_item.addEventListener('mouseover', _ => {
                        list_item.addClass='active';
                    });
                    list.appendChild(list_item);
                    
                })
                .catch(_ => console.log('User not found'));
            });
        }).catch(_ => console.log('Promise failed'));
        
}

userName();
