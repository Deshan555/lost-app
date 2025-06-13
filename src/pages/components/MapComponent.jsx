import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const MapComponent = ({ lat, lng }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const markerInstance = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: apiKey,
            version: "weekly",
            libraries: ["maps", "marker"],
        });

        loader.load().then((google) => {
            const position = { lat: parseFloat(lat), lng: parseFloat(lng) };

            mapInstance.current = new google.maps.Map(mapRef.current, {
                zoom: 10,
                center: position,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
            });
            markerInstance.current = new google.maps.Marker({
                position: position,
                map: mapInstance.current,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: new google.maps.Size(25, 25),
                },
            });
            const infoWindow = new google.maps.InfoWindow();

            markerInstance.current.addListener("click", () => {
                const pos = markerInstance.current.getPosition();
                infoWindow.setContent(`<b>Location:</b> ${pos.lat()}, ${pos.lng()}`);
                infoWindow.open(mapInstance.current, markerInstance.current);
            });
        });
    }, [apiKey, lat, lng]);

    useEffect(() => {
        if (mapInstance.current && markerInstance.current) {
            const position = { lat: parseFloat(lat), lng: parseFloat(lng) };
            mapInstance.current.setCenter(position);
            markerInstance.current.setPosition(position);
        }
    }, [lat, lng]);

    return <div ref={mapRef} style={{ height: "300px", width: "100%" }} />;
};

export default MapComponent;