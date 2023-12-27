import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";

function App() {
  const [semester, setSemester] = useState("ODD 2023");
  const [rollNumber, setRollNumber] = useState("");
  const [seatNumber, setSeatNumber] = useState(null);
  const [displayResult, setDisplayResult] = useState(false);

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with semester and rollNumber data as needed
    if (rollNumber.length === 11) setSeatNumber("");
    else window.alert("Enter Vaid Details");
  };

  const handleSeatNumberChange = (event) => {
    setSeatNumber(event.target.value);
  };

  const finalSubmit = (event) => {
    event.preventDefault();
    if (seatNumber === "313606" && rollNumber === "20010323101")
      setDisplayResult(true);
    else console.log(1);
    // alert("Details do not Match, please verify");
  };

  return (
    <div className="App">
      <div className="topMenu"></div>
      <div className="container-fluid mt-8">
        <div className="d-flex flex-row">
          <div className="col-md-10 d-flex justify-content-start align-items-center">
            <img
              className="img-responsive"
              src="/symbiosis_logo.png"
              alt="SIU"
              title="Symbiosis International University"
              style={{ width: "55%" }}
            ></img>
          </div>
          <div className="col-md-2">
            <img
              className="img-responsive"
              src="/one-world-img.png"
              alt="SIU"
              title="One World"
              style={{ width: "81%" }}
            ></img>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="container minht">
        <h2 className="h2txt">RESULTS</h2>
        <hr className="hrline" />
        <div className="container jumbotron">
          <div className="row">
            <div class="col-md-7">
              <form onSubmit={handleSubmit} id="resultform">
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "10px",
                    marginLeft: "50px",
                  }}
                >
                  <label htmlFor="semester" style={{ marginRight: "20px" }}>
                    Select Season
                    <span
                      style={{
                        color: "red",
                        marginLeft: "4px",
                        marginRight: "4px",
                      }}
                    >
                      *
                    </span>
                    :
                  </label>
                  <select
                    id="semester"
                    value={semester}
                    onChange={handleSemesterChange}
                    required
                    style={{
                      border: "1px solid blue",
                      borderRadius: "2px",
                      background: "#fff",
                    }}
                    disabled={seatNumber !== null ? "disabled" : ""}
                  >
                    <option value="1">ODD 2023</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "10px",
                    marginLeft: "50px",
                  }}
                >
                  <label htmlFor="rollNumber" style={{ marginRight: "20px" }}>
                    Enter Your PRN
                    <span
                      style={{
                        color: "red",
                        marginLeft: "4px",
                        marginRight: "4px",
                      }}
                    >
                      *
                    </span>
                    :
                  </label>
                  <input
                    type="text"
                    id="rollNumber"
                    value={rollNumber}
                    onChange={handleRollNumberChange}
                    required
                    style={{
                      border: "1px solid blue",
                      borderRadius: "2px",
                      background: "#fff",
                    }}
                    disabled={seatNumber !== null ? "disabled" : ""}
                  />

                  <button
                    type="submit"
                    style={{ marginLeft: "25px" }}
                    className="btn btn-success"
                    disabled={seatNumber !== null}
                  >
                    Submit
                  </button>
                </div>
              </form>
              {seatNumber !== null && (
                <form onSubmit={finalSubmit}>
                  <div className="d-flex flex-row mt-2 align-items-center">
                    <div
                      style={{
                        textAlign: "left",
                        marginTop: "10px",
                        marginLeft: "50px",
                      }}
                    >
                      <label
                        htmlFor="seatNumber"
                        style={{ marginRight: "20px" }}
                      >
                        Enter Seat Number of Sem 7
                        <span
                          style={{
                            color: "red",
                            marginLeft: "4px",
                            marginRight: "4px",
                          }}
                        >
                          *
                        </span>
                        :
                      </label>
                      <input
                        type="text"
                        id="seatNumber"
                        value={seatNumber}
                        onChange={handleSeatNumberChange}
                        required
                        style={{
                          border: "1px solid blue",
                          borderRadius: "2px",
                          background: "#fff",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{ marginLeft: "25px" }}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          {displayResult && (
            <iframe
              src="/31siuexmrslt38516.pdf"
              type="application/pdf"
              width="100%"
              height="800px"
              className="mt-4"
              style = {{marginTop: "50px", marginBottom: "50px"}}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
