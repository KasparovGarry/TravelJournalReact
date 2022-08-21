import React from "react";
import icon from "../../icons/location-icon.png";
import styles from "./styles.module.scss";
console.log();
function Card({
    googleMapsLink,
    location,
    imageURL,
    title,
    startDate,
    endDate,
    description,
}) {
    return (
        <div className="card-wrapper">
            <div className={styles.card}>
                <img className={styles.coverImage} src={imageURL} />
                <div className={styles.description}>
                    <a
                        href={googleMapsLink}
                        className={styles.location}
                        target="_blank"
                    >
                        <img className={styles.locationIcon} src={icon} />
                        <span className={styles.country}>{location}</span>
                        <span className={styles.locationLink}>
                            View on Google Maps
                        </span>
                    </a>

                    <h1>{title}</h1>

                    <span className={styles.date}>
                        {startDate} - {endDate}
                    </span>

                    <p className={styles.description}>{description}</p>
                </div>
            </div>
            <div className="br"></div>
        </div>
    );
}

export default Card;
