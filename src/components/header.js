import { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { supabase } from "../client";
import Login from "./login-button";
import Logout from "./logout-button";

export default function Header() {
    const { isAuthenticated, user } = useAuth0();
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");

    const openWidget = () => {
        const widget = window.cloudinary.createUploadWidget(
          {
            cloudName: "masked",
            uploadPreset: "ml_default"
          },
          (error, result) => {
            if (result.event === "success") {
              if (result.info.is_audio === true) {
                setUrl(result.info.secure_url);
                setTitle(result.info.original_filename);
                setName(user.name);
              }
            }
          }
        );
        widget.open();
      };
    
    const createSong = async () => {
    await supabase
        .from("songs")
        .insert([
        {
            url,
            title,
            name
        }
        ])
        .single();
    };

    if (url && title && name) {
    createSong();
    window.location.reload(false);
    }

    return (
    <div className="d-flex flex-column justify-content-between flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Musistic</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-3 text-success text-decoration-none" href="/">Home</a>
          <a className="p-3 text-danger text-decoration-none" href="/">Trending</a>
          <a className="p-3 text-info text-decoration-none" href="/">Top Songs</a>
        </nav>
        {isAuthenticated ? (
            <div>
            <Button
                id="btnUpload"
                className="btn margin"
                onClick={() => openWidget()}
                variant="primary"
            >
                Upload Song
            </Button>
            &nbsp;&nbsp;
            <Logout />
            </div>
            ) : (
            <Login />
            )}
        </div>
    );
} 