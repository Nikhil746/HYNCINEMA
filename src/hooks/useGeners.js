const useGenres = (selectGenres) => {
    if (selectGenres.length < 1) return "";


    const generIDs = selectGenres.map((g) => g.id);
    return generIDs.reduce((acc, curr) => acc + "," + curr)
}

export default useGenres;