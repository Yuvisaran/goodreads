import React, { Component } from "react";
import axios from 'axios';
import Pagination from "react-js-pagination";

import './assets/style.css';

class App extends Component {
  state = {
    bookName: '',
    page: 1,
    bookList: [
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1236089972i/2153405._SY75_.jpg",
        "bookId": "2153405",
        "workId": "2158906",
        "bookUrl": "/book/show/2153405.Still_Alice",
        "title": "Still Alice",
        "bookTitleBare": "Still Alice",
        "numPages": 292,
        "avgRating": "4.31",
        "ratingsCount": 271010,
        "author": {
          "id": 978484,
          "name": "Lisa Genova",
          "isGoodreadsAuthor": true,
          "profileUrl": "https://www.goodreads.com/author/show/978484.Lisa_Genova",
          "worksListUrl": "https://www.goodreads.com/author/list/978484.Lisa_Genova"
        },
        "kcrPreviewUrl": "https://read.amazon.in/nc/?kcrFree=only&tag=x_gr_w_preview_new_nf_story_in-21&asin=B001NLKXK2",
        "description": {
          "html": "<i>Still Alice</i> is a compelling debut novel about a 50-year-old woman's sudden descent into early onset Alzheimer's disease, written by first-time author Lisa Genova, who holds a…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/2153405.Still_Alice"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537058720i/41839602._SY75_.jpg",
        "bookId": "41839602",
        "workId": "57291583",
        "bookUrl": "/book/show/41839602-still-me",
        "title": "Still Me",
        "bookTitleBare": "Still Me",
        "numPages": 469,
        "avgRating": "4.17",
        "ratingsCount": 87581,
        "author": {
          "id": 281810,
          "name": "Jojo Moyes",
          "isGoodreadsAuthor": true,
          "profileUrl": "https://www.goodreads.com/author/show/281810.Jojo_Moyes",
          "worksListUrl": "https://www.goodreads.com/author/list/281810.Jojo_Moyes"
        },
        "kcrPreviewUrl": "https://read.amazon.in/nc/?kcrFree=only&tag=x_gr_w_preview_new_nf_story_in-21&asin=B06XH6FZQS",
        "description": {
          "html": "<b>From the #1<i> New York Times </i>bestselling author Jojo Moyes, a new book featuring her iconic heroine of <i>Me Before You </i>and <i>After You, </i> Louisa Clark</b><br /><br />Louisa Clark arrives in New Yor…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/41839602-still-me"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1260468195i/7159515._SY75_.jpg",
        "bookId": "7159515",
        "workId": "7383770",
        "bookUrl": "/book/show/7159515-still-missing",
        "title": "Still Missing",
        "bookTitleBare": "Still Missing",
        "numPages": 352,
        "avgRating": "3.97",
        "ratingsCount": 57465,
        "author": {
          "id": 3163298,
          "name": "Chevy Stevens",
          "isGoodreadsAuthor": true,
          "profileUrl": "https://www.goodreads.com/author/show/3163298.Chevy_Stevens",
          "worksListUrl": "https://www.goodreads.com/author/list/3163298.Chevy_Stevens"
        },
        "kcrPreviewUrl": "https://read.amazon.in/nc/?kcrFree=only&tag=x_gr_w_preview_new_nf_story_in-21&asin=B0048BQR6S",
        "description": {
          "html": "On the day she was abducted, Annie O’Sullivan, a 32-year-old realtor, had three goals—sell a house, forget about a recent argument with her mother, and be on time for dinner…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/7159515-still-missing"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394240099i/6373717._SX50_.jpg",
        "bookId": "6373717",
        "workId": "6561348",
        "bookUrl": "/book/show/6373717-hold-still",
        "title": "Hold Still",
        "bookTitleBare": "Hold Still",
        "numPages": 230,
        "avgRating": "3.98",
        "ratingsCount": 18982,
        "author": {
          "id": 2889003,
          "name": "Nina LaCour",
          "isGoodreadsAuthor": true,
          "profileUrl": "https://www.goodreads.com/author/show/2889003.Nina_LaCour",
          "worksListUrl": "https://www.goodreads.com/author/list/2889003.Nina_LaCour"
        },
        "kcrPreviewUrl": "https://read.amazon.in/nc/?kcrFree=only&tag=x_gr_w_preview_new_nf_story_in-21&asin=B002QGB9E2",
        "description": {
          "html": "An arresting story about starting over after a friend’s suicide, from a breakthrough new voice in YA fiction.<br /><br /><i>dear caitlin, there are so many things that i want so badly to te…</i>",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/6373717-hold-still"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308749778i/9566._SY75_.jpg",
        "bookId": "9566",
        "workId": "1105809",
        "bookUrl": "/book/show/9566.Still_Life_with_Woodpecker",
        "title": "Still Life with Woodpecker",
        "bookTitleBare": "Still Life with Woodpecker",
        "numPages": 288,
        "avgRating": "4.04",
        "ratingsCount": 65691,
        "author": {
          "id": 197,
          "name": "Tom Robbins",
          "isGoodreadsAuthor": false,
          "profileUrl": "https://www.goodreads.com/author/show/197.Tom_Robbins",
          "worksListUrl": "https://www.goodreads.com/author/list/197.Tom_Robbins"
        },
        "kcrPreviewUrl": "https://read.amazon.in/nc/?kcrFree=only&tag=x_gr_w_preview_new_nf_story_in-21&asin=B000FBFNXS",
        "description": {
          "html": "Still Life with Woodpecker is a sort of a love story that takes place inside a pack of Camel cigarettes. It reveals the purpose of the moon, explains the difference between c…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/9566.Still_Life_with_Woodpecker"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1378767595i/17860739._SY75_.jpg",
        "bookId": "17860739",
        "workId": "25004628",
        "bookUrl": "/book/show/17860739-s",
        "title": "S.",
        "bookTitleBare": "S.",
        "numPages": 456,
        "avgRating": "3.84",
        "ratingsCount": 16400,
        "author": {
          "id": 2878860,
          "name": "J.J. Abrams",
          "isGoodreadsAuthor": false,
          "profileUrl": "https://www.goodreads.com/author/show/2878860.J_J_Abrams",
          "worksListUrl": "https://www.goodreads.com/author/list/2878860.J_J_Abrams"
        },
        "kcrPreviewUrl": "https://read.amazon.in/nc/?kcrFree=only&tag=x_gr_w_preview_new_nf_story_in-21&asin=B00G99SIO6",
        "description": {
          "html": "<i>One book. Two readers. A world of mystery, menace, and desire.</i><br /><br />A young woman picks up a book left behind by a stranger. Inside it are his margin notes, which reveal a reader e…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/17860739-s"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331484206i/5136453._SY75_.jpg",
        "bookId": "5136453",
        "workId": "3212258",
        "bookUrl": "/book/show/5136453-bis-s-zum-morgengrauen",
        "title": "Bis(s) zum Morgengrauen (Twilight, #1)",
        "bookTitleBare": "Bis(s) zum Morgengrauen",
        "numPages": 576,
        "avgRating": "3.58",
        "ratingsCount": 4379691,
        "author": {
          "id": 941441,
          "name": "Stephenie Meyer",
          "isGoodreadsAuthor": false,
          "profileUrl": "https://www.goodreads.com/author/show/941441.Stephenie_Meyer",
          "worksListUrl": "https://www.goodreads.com/author/list/941441.Stephenie_Meyer"
        },
        "kcrPreviewUrl": "https://read.amazon.in/nc/?kcrFree=only&tag=x_gr_w_preview_new_nf_story_in-21&asin=B01MUCRRYF",
        "description": {
          "html": "Mit Romantik oder gar Leidenschaft hätte Bella ihren Umzug nach Forks, einer langweiligen, ständig verregneten Kleinstadt in Washington State, kaum in Verbindung gebracht. Bi…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/5136453-bis-s-zum-morgengrauen"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500069138i/35677419._SY75_.jpg",
        "bookId": "35677419",
        "workId": "245494",
        "bookUrl": "/book/show/35677419-the-great-gatsby",
        "title": "The Great Gatsby",
        "bookTitleBare": "The Great Gatsby",
        "numPages": 198,
        "avgRating": "3.91",
        "ratingsCount": 3238897,
        "author": {
          "id": 3190,
          "name": "F. Scott Fitzgerald",
          "isGoodreadsAuthor": false,
          "profileUrl": "https://www.goodreads.com/author/show/3190.F_Scott_Fitzgerald",
          "worksListUrl": "https://www.goodreads.com/author/list/3190.F_Scott_Fitzgerald"
        },
        "kcrPreviewUrl": "https://read.amazon.in/nc/?kcrFree=only&tag=x_gr_w_preview_new_nf_story_in-21&asin=B00EJRPZEQ",
        "description": {
          "html": "Here is a novel, glamorous, ironical, compassionate – a marvelous fusion into unity of the curious incongruities of the life of the period – which reveals a hero like no othe…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/35677419-the-great-gatsby"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423431381i/24878739._SY75_.jpg",
        "bookId": "24878739",
        "workId": "153313",
        "bookUrl": "/book/show/24878739-1984",
        "title": "1984",
        "bookTitleBare": "1984",
        "numPages": null,
        "avgRating": "4.17",
        "ratingsCount": 2538821,
        "author": {
          "id": 3706,
          "name": "George Orwell",
          "isGoodreadsAuthor": false,
          "profileUrl": "https://www.goodreads.com/author/show/3706.George_Orwell",
          "worksListUrl": "https://www.goodreads.com/author/list/3706.George_Orwell"
        },
        "kcrPreviewUrl": null,
        "description": {
          "html": "Among the seminal texts of the 20th century, <i>Nineteen Eighty-Four</i> is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, th…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/24878739-1984"
        }
      },
      {
        "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394204569i/7745._SY75_.jpg",
        "bookId": "7745",
        "workId": "1309111",
        "bookUrl": "/book/show/7745.Fear_and_Loathing_in_Las_Vegas",
        "title": "Fear and Loathing in Las Vegas",
        "bookTitleBare": "Fear and Loathing in Las Vegas",
        "numPages": 204,
        "avgRating": "4.08",
        "ratingsCount": 269803,
        "author": {
          "id": 5237,
          "name": "Hunter S. Thompson",
          "isGoodreadsAuthor": false,
          "profileUrl": "https://www.goodreads.com/author/show/5237.Hunter_S_Thompson",
          "worksListUrl": "https://www.goodreads.com/author/list/5237.Hunter_S_Thompson"
        },
        "kcrPreviewUrl": null,
        "description": {
          "html": "<i>Fear and Loathing in Las Vegas</i> is the best chronicle of drug-soaked, addle-brained, rollicking good times ever committed to the printed page. It is also the tale of a long we…",
          "truncated": true,
          "fullContentUrl": "https://www.goodreads.com/book/show/7745.Fear_and_Loathing_in_Las_Vegas"
        }
      }
    ],
    perPage: 5
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handlePageChange = page => {
    this.setState({ page });
  }

  render() {
    const { bookList, bookName, page, perPage } = this.state;
    console.log('booklist', bookList)
    let tList = bookList;
    let sString = bookName.toString().trim().toLowerCase();
    if (sString.length > 0) {
      tList = tList.filter((i) => {
        return (
          i.title.toString().toLowerCase().match(sString)
        )
      })
    }

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <form className="form-inline">
            <input className="form-control mr-sm-2" name='bookName' type="text" value={bookName}
              placeholder="Search" onChange={this.handleChange} />
          </form>
        </nav>
        <br />

        <div className="container">
          <div className='row'>
            <div className="card-group">
              {tList.map((each, i) => {
                return (
                  page * perPage > i &&
                  (page - 1) * perPage <= i &&
                  <div key={i} className="col-lg-3">
                    <div className="card-body text-center">
                      <img src={each.imageUrl} alt='book' />
                      <p>{each.title}</p>
                      <p>{each.author.name}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='datatable-pagination'>
            {tList.length > 0 &&
              <Pagination
                prevPageText='Previous'
                nextPageText='Next'
                hideFirstLastPages
                activePage={page}
                activeLinkClass='active'
                linkClassPrev='active'
                linkClassNext='active'
                itemsCountPerPage={perPage}
                totalItemsCount={bookList.length}
                onChange={(page) => this.handlePageChange(page)} />
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
