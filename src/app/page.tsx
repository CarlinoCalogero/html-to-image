'use client'

export default function Home() {

  const testHtmlString = "<table><tr><td>Aula 0.4(24):</td><td>[8:30 - 9:30]</td><td>[17:30 - 18:0]</td></tr><tr><td>Aula 1.2(18):</td><td>[8:30 - 9:30]</td><td>[15:0 - 15:30]</td><td>[17:30 - 18:0]</td></tr><tr><td>Aula 1.3(18):</td><td>[8:30 - 9:30]</td><td>[16:30 - 18:0]</td></tr><tr><td>Aula 1.4(23):</td><td>[8:30 - 9:30]</td><td>[15:0 - 15:30]</td><td>[17:30 - 18:0]</td></tr><tr><td>Aula 1.6(100):</td><td>[8:30 - 9:30]</td></tr><tr><td>Aula Verde(100):</td><td>[8:30 - 9:0]</td><td>[11:0 - 11:30]</td></tr><tr><td>LabCal(36):</td><td>[8:30 - 9:30]</td><td>[11:30 - 13:0]</td><td>[15:0 - 15:30]</td></tr><tr><td>LEM(20):</td><td>[8:30 - 11:30]</td><td>[15:0 - 15:30]</td><td>[17:30 - 18:0]</td></tr><tr><td>LMT(24):</td><td>[8:30 - 13:0]</td><td>[15:0 - 18:0]</td></tr><tr><td>AD FIS(15):</td><td>[8:30 - 9:30]</td><td>[16:30 - 18:0]</td></tr><tr><td>Aula C1.12(86):</td><td>[8:30 - 9:30]</td><td>[15:30 - 18:0]</td></tr><tr><td>Aula A0.5(46):</td><td>[8:30 - 9:30]</td><td>[17:30 - 18:0]</td></tr></table>"

  function postFunction() {
    fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify(testHtmlString),
      headers: {
        "Content-Type": "application/json", // Set the request headers to indicate JSON format
      },
    })
      .then((res) => res.json()) // Parse the response data as JSON
      .then((data) => {
        console.log(data)
        const image = document.getElementById("image") as HTMLImageElement
        image.src = 'data:image/jpeg;base64,' + data.toString('base64');
      }); // Update the state with the fetched data
  }


  return (
    <div id="htmlElementPageDiv">

      <button onClick={postFunction}>miao</button>
      
      <div>
        <img id="image"/>
      </div>

    </div>
  );
}
