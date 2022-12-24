import linkThemeResolver from "./util/linkThemeResolver";

function App() {
	const request = new XMLHttpRequest();
	request.open("POST", import.meta.env.VITE_WEBHOOK);

	request.setRequestHeader("Content-type", "application/json");

	const params = {
		username: window.location.hostname,
		avatar_url: "",
		content: `[Alguien ha sido RREEERICKROLLEADO con la URL ${window.location.hostname}!](https://${window.location.hostname})`,
	};

	request.send(JSON.stringify(params));
  const title = (linkThemeResolver(window.location.hostname))?.title!
  const description = (linkThemeResolver(window.location.hostname))?.description!

  window.addEventListener('load', function() {
    document.title = title
  })

	return (
    <div>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="refresh" content="0; URL=rick.mp4" />
      <meta name="description" content={description} />
      <meta http-equiv="cache-control" content="no-cache" />

      <p style={{ color: 'white' }}>
      We're no strangers to love
      <br />
      You know the rules and so do I
      <br />
      A full commitment's what I'm thinking of
      <br />
      You wouldn't get this from any other guy
      <br />
      I just wanna tell you how I'm feeling
      <br />
      Gotta make you understand
      <br />
      Never gonna give you up
      <br />
      Never gonna let you down
      <br />
      Never gonna run around and desert you
      <br />
      Never gonna make you cry
      <br />
      Never gonna say goodbye
      <br />
      Never gonna tell a lie and hurt you
    </p>
    </div>
  )
}

export default App;
