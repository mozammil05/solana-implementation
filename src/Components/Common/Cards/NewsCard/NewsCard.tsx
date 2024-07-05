import React from 'react'
import './NewsCard.scss';
import CommonCard from '../CommonCard/CommonCard';
import { Link } from 'react-router-dom';
import sampleImg from '../../../../Assets/Images/profile-img.png';

const NewsCard = () => {
    const data = [
        {
            id: 1,
            title: "DeFi Could Erupt 100X in Next 10 Years As Most of World Financial System Gets Replaced, Says Maple Finance CEO",
            date: 'May 4, 2023',
            image: sampleImg,
            to: "",
            active: true,
        },
        {
            id: 2,
            title: "With RGB, The Bitcoin Lightning Network Can Now Transfer Altcoin Assets",
            date: 'Apr 21, 2023',
            image: sampleImg,
            to: "",
            active: true,
        },
        {
            id: 3,
            title: "With RGB, The Bitcoin Lightning Network Can Now Transfer Altcoin Assets",
            date: 'Apr 21, 2023',
            image: sampleImg,
            to: "",
            active: true,
        },
    ]
    return (
        <CommonCard cardTitle='News' className="NewsCard" viewAllNavigate={'/auth/dashboard/libfi'}>
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>
                            <Link
                                to={item.to}
                                className={`${item.active ? "active" : ""}`}
                            >
                                <img src={item.image} alt="" />
                                <div>
                                    <strong>{item.title}</strong>
                                    <span>{item.date}</span>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </CommonCard>
    )
}

export default NewsCard
