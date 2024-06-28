import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import CryptoJS from 'crypto-js'
import styled from 'styled-components';

const url = import.meta.env.VITE_BACKEND_URL
const skey = import.meta.env.VITE_SKEY

function decryptData(ciphertext) {
    if (ciphertext) {
        const bytes = CryptoJS.AES.decrypt(ciphertext, skey);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } else {
        return null
    }
}

function convertNewlinesToBreaks(text) {
    return text ? text.replace(/\n/g, '<br />') : '';
}

const AnnouncmentDetails = () => {
    const [data, setData] = useState();
    const params = useParams();

    const getSingleAnnouncements = async (url) => {
        const res = await Axios.get(url + 'announcement/get-single-announcement/?announcementID=' + params.id);

        setData(res?.data)
    }

    useEffect(() => {
        getSingleAnnouncements(url);
    }, [])

    return (
        <Wrapper banner={data?.banner}>
            <div className="main">
                <div class="img-wrapper">
                    <img src={data?.banner} alt="banner" />
                </div>
                <div className="info">
                    <h2>{data?.title} <span>{data?.createdAt.slice(0, 10)}</span></h2>
                    <p dangerouslySetInnerHTML={{ __html: convertNewlinesToBreaks(decryptData(data?.description)) }} />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    height: fit-content;
    padding-bottom: 5rem;
    background-color: #0d0028;  
    padding-top: 8rem; 

  .main {
    width: 90%;
    background-image: linear-gradient(22deg, #001369, #423c3d);
    border-radius: 1rem;
    padding: 1rem;
    margin: auto;

    .img-wrapper {
        background: url(${({banner}) => banner}) center center/cover; 
        backdrop-filter: blur(10px);
        display:flex;
        justify-content: center;
        padding: 3rem;
        height: 50vh;
        border-radius: 1rem;


        img {
            width: 50%;
            height: 100%;
            border-radius: 1rem;
        }
    }
    
    .info {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        align-items: center;
        gap: 3rem;

        h2 {
            font-family: 'Poppins', sans-serif;
            color: white;
            
            span {
                font-size: 2rem;
                color: #b7abab;
            }
        }

        p {
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            color: white;
            width: 90%;
        }
    }
}


    @media(max-width: ${({theme}) => theme.media.mobile}) {
        .main {
            .img-wrapper {
                img {
                    display: none;
                }
            }

            .info {
                p {
                    width: 100%;
                    line-break: anywhere;
                    font-size: 2.5rem;
                }
            }
        }
    }
`;

export default AnnouncmentDetails
