function solution(record) {
    var answer = [];

    const map = [];
    const status = [];
    
    record.forEach(v => {
        const split = v.split(" ");
        if(split[0] !== 'Leave')
            map[split[1]] = split[2];
        if(split[0] !== 'Change')
           status.push([split[0], split[1]]);
    });
    
    console.log(status);
    
    
    status.forEach(v => {
        const str = (v[0] === 'Enter') 
                        ? `${map[v[1]]}님이 들어왔습니다.` 
                        : `${map[v[1]]}님이 나갔습니다.`;
        answer.push(str);
    })
    
    return answer;
}
