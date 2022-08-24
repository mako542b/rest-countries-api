
const CheckNeighbour = ({ neighbour, setDetailedCountry, theme }) => {
    const setDetailedCountryClick = () => {
        setDetailedCountry(neighbour)
    }

    return (
            <button className="border-button btn-theme btn-reset box-shadow" onClick={setDetailedCountryClick} style={{backgroundColor: theme.backgroundElements, color:theme.color}}>
                {neighbour?.name?.common}
            </button>
        )
}

export default CheckNeighbour