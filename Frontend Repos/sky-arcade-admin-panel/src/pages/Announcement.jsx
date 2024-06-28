import React, { useState, useEffect } from 'react'
import { useGetAnnouncementQuery, useDeleteAnnouncementMutation } from '../RTK/ApiRequests.js'
import styled from 'styled-components'
import Loader from '../components/Loader.jsx'
import AddAnnouncement from '../components/AddAnnouncement.jsx'

const Announcement = () => {

  const { data, isLoading, isError } = useGetAnnouncementQuery();
  console.log(data)
  const [deleteAnnouncement] = useDeleteAnnouncementMutation()

  const [popUp, setPopUp] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SlotWrapper>
      {
        popUp ? <AddAnnouncement setPopUp={setPopUp} popUp={popUp} /> : null
      }
      <div className="main">
        <h1>Announcements</h1>
        <div className="head">
          <div className="cards">
            <div className="card" style={{ backgroundColor: '#434ce6', color: '#fff' }}><h3>Total Announcements<i class="fa-solid fa-check-to-slot"></i></h3><span>{data?.length} {data?.length > 1 ? 'Announcements' : 'Announcement'}</span></div>
          </div>
        </div>
        <div className="table">
          <button onClick={() => {
            setPopUp(true)
          }}>Add Announcement</button>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Created At</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((currElem) => {
                  return <tr>
                    <td>{currElem.announcementID}</td>
                    <td>{currElem.title}</td>
                    <td>{currElem.createdAt.slice(0, 10)}</td>
                    <td><button
                      style={{ backgroundColor: 'red' }}
                      onClick={async () => {
                        await deleteAnnouncement({ announcementID: currElem.announcementID });
                        window.location.reload();
                      }}>Delete</button></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </SlotWrapper>
  )
}

const SlotWrapper = styled.section`
    width: 80%;
    height: 100vh;

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .main {
    width: 100%;height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    padding: 10px 0px;
    font-family: Open Sans;
  }

  .head {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    gap: 2rem;

    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
 
      .card {
        width: 30rem;
        height: fit-content;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        background-color: #fffdfd;
        border-radius: 1rem;
        color: #000;
        box-shadow: 3px 2px 5px 2px gainsboro;
        
          h3{
            font-family: Open Sans;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          span {
            font-size: 2rem;
            font-weight: bold;
            font-family: Open Sans;
          }
      }
    }
  }

    .table {
    padding: 1rem;

    button {
        padding: 0.7rem;
        border-radius: 5px;
        outline: none;
        border: none;
        background-color: green;
        color: white;
        cursor: pointer;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background-color: #fefefe;
    }

    th, td {
      padding: 8px;
      text-align: left;
      font-size: 1.5rem;
      font-family: Open Sans;

      .removeBtn {
        border: none;
        color: #fff;
        background-color: red;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin-right: 2px;
        cursor: pointer;
        font-family: Open Sans;
      }
    }

    th {
      background-color: #f2f2f2;
    }
  }
`

export default Announcement