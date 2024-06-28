import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcment from '../components/Announcment';
import Axios from 'axios'
import CryptoJS from 'crypto-js'

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

const Announcments = () => {

  const [data, setData] = useState();

  const getAnnouncements = async (url) => {
    const res = await Axios.get(url + 'announcement/get-announcements');

    setData(res?.data)
  }

  useEffect(() => {
    getAnnouncements(url);
  }, [])

  return (
    <Wrapper>
      {
        data?.map((currElem) => {
          return <Announcment
          announcementID={currElem.announcementID}
          banner={currElem.banner}
          title={currElem.title}
          description={decryptData(currElem.description)}
        />
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  background-color: #0D0028;  
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  padding-bottom: 5rem;
  padding-top: 10rem;
`;

export default Announcments 