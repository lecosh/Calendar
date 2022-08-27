class Calendar {
    constructor(element){
        this.element = element
    }
    current = new Date()
    currentYear = this.current.getFullYear()
    currentMonth = this.current.getMonth()
    months = [
        {
            days: 31,
            name: 'January'
        }, 
        {
            days: 28,
            name: 'February'
        },
        {
            days: 31,
            name: 'March'

        },
        {
            days: 30,
            name: 'April'
        },
        {
            days: 31,
            name: 'May'
        },
        {
            days: 30,
            name: 'June'
        },
        {
            days: 31,
            name: 'July'
        },
        {
            days: 31,
            name: 'August'
        },
        {
            days: 30,
            name: 'September'
        },
        {
            days: 31,
            name: 'October'
        },
        {
            days: 30,
            name: 'November'
        },
        {
            days: 31,
            name: 'December'
        }
    ]
    daysOfWeek = [
        'Sun', 
        'Mon',
        'Tu',
        'We',
        'Th',
        'Fri',
        'Sat',
    ]
    showCurrentMonth(m, y){
        this.element.innerHTML = ''
        const year = document.querySelector('.year')
        const month = document.querySelector('.month')
        year.innerHTML = y
        month.innerHTML = m.name
        this.element.innerHTML += `
        <div class="w-[100%] table" style="border-collapse: collapse;">
            <div class="week flex">
                    <div class="border border-zinc-400 text-center p-0 w-[14%] h-[14%]">${this.daysOfWeek[0]}</div>
                    <div class="border border-zinc-400 text-center p-0 w-[14%] h-[14%]">${this.daysOfWeek[1]}</div>
                    <div class="border border-zinc-400 text-center p-0 w-[14%] h-[14%]">${this.daysOfWeek[2]}</div>
                    <div class="border border-zinc-400 text-center p-0 w-[14%] h-[14%]">${this.daysOfWeek[3]}</div>
                    <div class="border border-zinc-400 text-center p-0 w-[14%] h-[14%]">${this.daysOfWeek[4]}</div>
                    <div class="border border-zinc-400 text-center p-0 w-[14%] h-[14%]">${this.daysOfWeek[5]}</div>
                    <div class="border border-zinc-400 text-center p-0 w-[14%] h-[14%]">${this.daysOfWeek[6]}</div>
                </div>
            <div class="alldays flex flex-wrap text-center"></div>
        </div>
        `
        if (y % 4 !== 0 || y % 100 === 0 && y % 400 !== 0) {
            this.months[1].days = 28
        }
        else {
            this.months[1].days = 29
        }
        let cur = document.querySelector('.alldays')
        let newDate = new Date(`${y}-${this.months.indexOf(m) + 1}-01`)
        for (let i = 0; i < newDate.getDay(); i++){
            if (this.months.indexOf(m) === 0){
                cur.insertAdjacentHTML("afterbegin", `<div class="w-[14%] h-[14%] border border-zinc-400 text-zinc-300">${this.months[this.months.length - 1].days - i}</div>`)
            }else{
                cur.insertAdjacentHTML("afterbegin", `<div class="w-[14%] h-[14%] border border-zinc-400 text-zinc-300">${this.months[this.months.indexOf(m) - 1].days - i}</div>`)
            }
        }
        for(let i = 0; i < m.days; i++){
            if (i === this.current.getDate() - 1 && this.currentMonth === this.current.getMonth() && this.currentYear === this.current.getFullYear()){
                cur.insertAdjacentHTML("beforeend", `<div class="w-[14%] h-[14%] border border-zinc-400 font-bold bg-orange-100">${i + 1}</div>`)
            }else{
                cur.insertAdjacentHTML("beforeend", `<div class="w-[14%] h-[14%] border border-zinc-400">${i + 1}</div>`)
            }
        }
    }
    showCurr(){
        this.showCurrentMonth(this.months[this.currentMonth], this.currentYear)
    }
    nextYear() {
        if (this.currentMonth === 11){
            this.currentMonth = 0
            this.currentYear++
        }
        else {
            this.currentMonth++
        }
        this.showCurr()
    }
    prevYear(){
        if (this.currentMonth === 0){
            this.currentMonth = 11
            this.currentYear--
        } else{
            this.currentMonth--
        }
        this.showCurr()
    }
}
window.onload = function(){
    const nextYearBtn = document.getElementById('next')
    const prevYearBtn = document.getElementById('prev')
    const calendar = document.getElementById('cal')
    let cal = new Calendar(calendar)
    cal.showCurr()
    nextYearBtn.addEventListener('click', ()=>{cal.nextYear()})
    prevYearBtn.addEventListener('click',()=>{cal.prevYear()})
}
