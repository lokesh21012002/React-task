// const res = await fetch("https://libretranslate.com/translate", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		q: "hello",
// 		source: "auto",
// 		target: "zt",
// 		format: "text",
// 		api_key: ""
// 	}),
// 	headers: { "Content-Type": "application/json" }
// });

  async function fun(){
    const res = await fetch("https://libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "hello",
		source: "auto",
		target: "zt",
		format: "text",
		api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json())

}

fun()

// console.log(await res.json());