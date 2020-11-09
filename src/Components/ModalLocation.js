import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdPlace } from "react-icons/md";
import "./ModalLocation.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function ModalLocation({ size, show, onHide }) {
  const [addres, setAddres] = useState("");

  const handleChange = (event) => {
    setAddres(event);
  };
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };
  return (
    <div className="modalLocation">
      <Modal
        contentClassName="customModalLocation"
        size={size}
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <h3>Cek makanan yang tersedia di lokasi kamu!</h3>
          <div className="modalLocation__input">
            {/* <input type="text" placeholder="search lokasi" /> */}
            <PlacesAutocomplete
              value={addres}
              onChange={handleChange}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div className="">
                  <MdPlace className="modalLocation__inputIcon" />
                  <input
                    {...getInputProps({
                      placeholder: "Search location",
                      className: "location-search-input",
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          className="ModalLocation__suggestion"
                          {...getSuggestionItemProps(suggestion, {
                            style,
                          })}
                        >
                          <MdPlace className="ModalLocation__suggestionIcon" />{" "}
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLocation;
