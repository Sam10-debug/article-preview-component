const share= document.querySelector('.share')
const style= document.createElement('style')
const sharefunc=()=>{
    style.innerHTML=`
    .details{
        display:none;
    }
    .images{
        display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 2fr 1fr;
    background-color:  hsl(214, 17%, 51%, 0.914);
    padding: 2rem;
    position: absolute;
    top: 88%;
    width: 375px;
    left: 0%;
    }
    .textwrap > p{
        margin-bottom:50px
    }
    .shares{
        margin-left:1rem;
        margin-right:1rem;
        width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: hsl(210, 46%, 95%,0.05);
    transform: translate(0,-55%);
    }
    .fb{
        transform: translate(0,-39%);
    }
    .twitter{
        transform: translate(0,-39%);
    }
    .lol{
        transform: translate(0,-39%);
        color: hsl(214, 19%, 71%, 1);
    }
    .pint{
        transform: translate(0,-39%);
    }
    `;
    document.head.appendChild(style)
}
share.addEventListener("click",sharefunc)