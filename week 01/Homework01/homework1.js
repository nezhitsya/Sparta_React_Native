let fruit_list = ['사과', '감', '감', '배', '포도', '포도', '딸기', '포도', '감', '수박', '딸기']
let count = 0

// '딸기' 갯수 map 함수 이용
fruit_list.map((fruit) => {
    if (fruit == "딸기") count += 1
})

console.log(count)