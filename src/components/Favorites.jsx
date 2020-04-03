import React, { useState } from 'react';
import Track from './Track';
import FavService from '../FavService';

function Favorites(props) {

    const [musics, setMusics] = useState(FavService.getFavoritesFromStorage());
    function onFavorites(music) {
        FavService.toggleFavorite(music);
        setMusics(FavService.getFavoritesFromStorage());
    }

    return (
        <main className="container mt-3">
            <h1>Mes favoris</h1>
            <p>Liste de mes titres favoris</p>
            <hr />
            {musics.map(music => (
                <Track
                    key={music.id}
                    music={music}
                    onClick={onFavorites}
                    isFavorite={FavService.isFavorite(music)}
                />
            ))}
        </main>

    );
}

export default Favorites;