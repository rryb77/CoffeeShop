const url = "https://localhost:5001/api/beanvariety/";
const contentTarget = document.querySelector(".beanvariety")

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => render(beanVarieties));
        
});

const submitBeanButton = document.querySelector("#submit-bean-button");
submitBeanButton.addEventListener("click", () => {
    const name = document.querySelector("#varietyName")
    const region = document.querySelector("#varietyRegion")
    const notes = document.querySelector("#varietyNotes")

    const beanVariety = {
        name: name.value,
        region: region.value,
        notes: notes.value
    }

    AddBeanVariety(beanVariety)

    name.value = ""
    region.value = ""
    notes.value = ""
})

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function AddBeanVariety(bean) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(bean)        
    })
}

const render = (beanVarieties) => {
    const allBeanVarietiesConvertedToStrings = beanVarieties.map(
        (variety) => {
            
            console.log(variety)
            return `
            <section>
                <div> Name: ${variety.name}</div>
                <div> Region: ${variety.region}</div>
                <div> Notes: ${variety.notes}</div>
            </section>
            <p></p>
            `
        }
    ).join("")
    
    contentTarget.innerHTML = allBeanVarietiesConvertedToStrings
}

