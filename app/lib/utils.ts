
export const getGridClass = (count : number) => {
    const colResponsive = "sm:grid-cols-2 lg:grid-cols-3"

    if(count === 1 ) return `grid-cols-1 ${colResponsive}`
    if(count === 2 ) return `grid-cols-2 ${colResponsive}`
    if(count >= 3 ) return `grid-cols-1 ${colResponsive}`
}


