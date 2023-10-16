import { useEffect, useState } from "react";
import {
  ComicsDetailsPageStyle,
  Container,
  ContainerDetails,
} from "./comics-details-page.style";
import { iComic } from "../../provider/types/@types-comic";
import { api } from "../../services/api/api";
import { hashKey } from "../../services/api/hash";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer/footer.index";
import { Header } from "../../components/header/header.index";

export const ComicsDetailPage = () => {
  const { comicId } = useParams();
  const hash = hashKey();
  const [comic, setComic] = useState<iComic | null>(null);

  const getComicDetails = async (comicId: number) => {
    try {
      const response = await api.get(`/comics/${comicId}?${hash}`);
      setComic(response.data.data.results[0]);
      console.log(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const formatDate = () => {
    const date = new Date(comic!.dates[0].date);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  };

  const getStaffByrole = (role: string) => {
    const staffList = comic!.creators.items;
    return staffList.filter((person) => person.role === role);
  };

  useEffect(() => {
    getComicDetails(Number(comicId));
  }, []);
  return (
    <>
      <Header />
      <ComicsDetailsPageStyle>
        {comic && (
          <>
            <Container>
              <div id="title">
                <h1>{comic.title}</h1>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
              </div>
              <div>
                <div>
                  <h1>Publish date:</h1>
                  {comic.dates[0] &&
                    (comic.dates[0].type === "onsaleDate" ? (
                      <span>{formatDate()}</span>
                    ) : (
                      <span>Not available</span>
                    ))}
                </div>
                <div>
                  <h1>Writen by:</h1>
                  {getStaffByrole("writer").map((staff) => (
                    <span> {staff.name} </span>
                  ))}
                </div>
                <div>
                  <h1>Penciler:</h1>
                  {getStaffByrole("penciler").map((staff) => (
                    <span> {staff.name} </span>
                  ))}
                </div>
                <div>
                  <h1>Description: </h1>
                  <p>{comic.description}</p>
                </div>
              </div>
            </Container>
            <ContainerDetails>
              <div id="details">
              <h1>MORE DETAILS</h1>
                {comic.creators.items.map((writer) => (
                  <div id="team-roles">
                    <span className="name">Name: {writer.name}</span>
                    <span>
                      <span className="role">
                        Role:{" "}
                        {`${writer.role[0].toUpperCase()}${writer.role.slice(
                          1
                        )}`}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div>
                {comic.pageCount === 0 ? (
                  <h1>Pages: -</h1>
                ) : (
                  <h1>Pages: {comic.pageCount}</h1>
                )}
                {comic.upc ? <h1>UPC: {comic.upc}</h1> : <h1>UPC: -</h1>}
                {comic.isbn ? <h1>ISBN: {comic.isbn}</h1> : <h1>ISBN: -</h1>}
                {comic.ean ? <h1>EAN: {comic.ean}</h1> : <h1>EAN: -</h1>}
                {comic.issn ? <h1>ISSN: {comic.issn}</h1> : <h1>ISSN: -</h1>}
              </div>
            </ContainerDetails>
          </>
        )}
      </ComicsDetailsPageStyle>

      <Footer />
    </>
  );
};
