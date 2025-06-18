import Image from 'next/image'
import "./Project.css"

export default function Project(props){
    return(
        <div className='reegan-card rounded'>
            <Image src={props.img} alt='One' className='reegan-image rounded w-100 h-auto shadow-sm rounded'></Image>
            <div className='info'>
                <h6 className='h4 title'>{props.title}</h6>
                <p className='content'>{props.desc}</p>
                <div className='text-end'>
                    <a target='blank' href={props.link} className='btn-border rounded-pill  px-3 py-0'>view</a>
                </div>
            </div>
        </div>
    )
}