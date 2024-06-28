import React, { useState } from 'react'
import styled from 'styled-components'
import { useAddAnnouncementMutation } from '../RTK/ApiRequests.js'

const AddAnnouncement = ({ setPopUp, popUp }) => {

    const [announcementData, setAnnouncementData] = useState({
        title: '',
        banner: '',
        description: '',
        date: new Date(Date.now())
    });
    const [addAnnouncement] = useAddAnnouncementMutation();

    const handleChange = (e) => {
        setAnnouncementData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const BannerImageHandler = (e) => {
        const files = e.target.files[0];
        if (files) {
          const reader = new FileReader();
          reader.readAsDataURL(files)
          reader.onload = () => {
            setAnnouncementData((prevData) => ({
                ...prevData,
                banner: reader.result
            }));
          }
          reader.onerror = err => {
            console.log(err)
          }
        }
      }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await addAnnouncement(announcementData);

        if (announcementData.title === '' || announcementData.description === ''  || announcementData.banner === '') {
            alert('Please fill out all the fields!')
        } else {
            if (!res.error) {
                alert("Announcement added successfully!");
                window.location.reload();
            } else {
                alert(res.error.data.message);
            }
        }

    }

    return (
        <AddAnnouncementWrapper>
            <div className="main-add-slot">
                <h2>Add Announcement <i className='fa fa-close' onClick={() => {
                    setPopUp(!popUp)
                }}></i></h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="banner">Announcement Banner</label>
                    <input
                        type="file"
                        id="banner"
                        name="banner"
                        onChange={BannerImageHandler}
                    />
                    <label htmlFor="title">Announcement Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={announcementData.title}
                        onChange={handleChange}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        rows='10'
                        cols='40'
                        value={announcementData.description}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                    >Add Announcement</button>
                </form>
            </div>
        </AddAnnouncementWrapper>
    )
}

const AddAnnouncementWrapper = styled.section`
    width: 70%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    backdrop-filter: blur(2px);

    .main-add-slot {
        background-color: white;
        width: 50%;
        height: 80vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        border-radius: 1rem;

        h2 {
            display: flex;
            justify-content: space-between;

            i {
                font-size: 4rem;
                cursor: pointer;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            padding-top: 2rem;

            input {
                text-transform: unset;
            }

            label {
                font-size: 1.5rem;
            }

            textarea {
                text-transform: unset;
            }

            button {
                padding: 0.7rem;
                border-radius: 5px;
                outline: none;
                border: none;
                background-color: green;
                color: white;
                cursor: pointer;
            }
        }
    }
`

export default AddAnnouncement