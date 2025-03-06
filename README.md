# Location Data Explanation

This `README.md` provides an overview of the generated location data, explaining each key and its significance.

---

## Overview
The data describes a location's address, coordinates, and additional geospatial details. Below is a breakdown of the fields and their respective meanings.

---

## Data Breakdown

### 1. **General Information**
- **`title`**: 
  - Complete address of the location: 
    > *Gang Alpukat 12 412, RT07/RW03, Tanjung Duren Utara Kel., Grogol Petamburan, Jakarta Barat, 11470, Indonesia*.

- **`id`**: 
  - A unique identifier for this location: 
    > `here:af:streetsection:Q.ghKfQYcXJqyxKW9Vs5-C:CgcIBCDmg4dgEAEaAzQxMg`.

- **`resultType`**: 
  - Specifies the type of result: `houseNumber` (indicates a specific house or building).

- **`houseNumberType`**: 
  - The type of house number: `PA` (Primary Address).

---

### 2. **Address Details**

This section contains detailed information about the address:

| Field            | Description                                                 |
|------------------|-------------------------------------------------------------|
| `label`          | Full address in text form.                                  |
| `countryCode`    | Country code: `IDN` (Indonesia).                            |
| `countryName`    | Country name: Indonesia.                                    |
| `countyCode`     | Province code: `ID-JK` (DKI Jakarta).                       |
| `county`         | Province name: DKI Jakarta.                                 |
| `city`           | City name: Jakarta Barat.                                   |
| `district`       | District: Grogol Petamburan.                                |
| `subdistrict`    | Subdistrict: Tanjung Duren Utara Kel.                       |
| `street`         | Street name: Gang Alpukat 12.                               |
| `block`          | Neighborhood: RT07/RW03.                                    |
| `postalCode`     | Postal code: 11470.                                         |
| `houseNumber`    | Specific house/building number: 412.                        |

---

### 3. **Geospatial Data**

- **`position`**:
  - Primary coordinates of the location:
    - Latitude: `-6.17261`
    - Longitude: `106.78553`

- **`access`**:
  - Nearest access point to the location:
    - Latitude: `-6.17276`
    - Longitude: `106.78553`

- **`mapView`**:
  - Bounding box covering the area:
    - **West:** `106.78463`
    - **South:** `-6.17351`
    - **East:** `106.78643`
    - **North:** `-6.17171`

---

### 4. **Scoring**

The scoring section evaluates the match between the search query and the location data:

- **`queryScore`**:
  - Overall match score: `0.82` (range: 0-1, where 1 is a perfect match).

- **`fieldScore`**:
  - Breakdown of matching fields:

| Field          | Score (0-1) | Description                       |
|----------------|-------------|-----------------------------------|
| `country`      | 1           | Perfect match for country.        |
| `city`         | 1           | Perfect match for city.           |
| `subdistrict`  | 0.87        | Strong match for subdistrict.     |
| `streets`      | 0.9         | Close match for street name.      |
| `houseNumber`  | 1           | Perfect match for house number.   |

---

## Key Highlights
- The location is highly accurate, with a query score of `0.82`.
- Detailed address and geospatial information are included for mapping or geolocation purposes.
- Bounding box data allows visual representation of the area around the location.

---

## Usage
This data can be used for:
1. **Mapping**: Displaying the location on a map.
2. **Geocoding**: Converting addresses into geographic coordinates.
3. **Location Matching**: Verifying and scoring address matches in applications.

---

## Example Coordinates
- Primary Location: Latitude `-6.17261`, Longitude `106.78553`
- Access Point: Latitude `-6.17276`, Longitude `106.78553`

---

## Notes
- Ensure accuracy by verifying the bounding box when rendering maps.
- Use `id` for consistent referencing of the location in systems.
