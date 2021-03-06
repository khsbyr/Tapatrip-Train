import { gql } from '@apollo/client';

export const BUS_ALL_LOCATIONS_QUERY = gql`
  query busAllLocations($region: String, $type: String) {
    busAllLocations(region: $region, type: $type) {
      edges {
        node {
          name
          id
          regionName
          region
          type
          typeName
          picture
        }
      }
    }
  }
`;

export const BUS_ALL_LOCATION_STOPS_QUERY = gql`
  query busAllLocationStops($location: ID, $type: String) {
    busAllLocationStops(location: $location, type: $type) {
      edges {
        node {
          name
          id
          type
          typeName
          picture
          location {
            id
            name
          }
        }
      }
    }
  }
`;

export const BUS_LOCATION_ENDS_QUERY = gql`
  query busAllLocationEnds($locationStopLocation: ID!, $locationStop: ID!) {
    busAllLocationEnds(
      locationStop_Location: $locationStopLocation
      locationStop: $locationStop
    ) {
      edges {
        node {
          id
          locationStop {
            id
            name
            location {
              name
            }
          }
          locationEnd {
            id
            name
            location {
              name
            }
          }
        }
      }
    }
  }
`;

export const BUS_ALL_SCHEDULES_QUERY = gql`
  query busAllSchedules(
    $startLocation: ID
    $stopLocation: String
    $locationEnd: ID
    $leaveDate: String
  ) {
    busAllSchedules(
      locationEnd_LocationStop_Location: $startLocation
      locationEnd_LocationEnd: $stopLocation
      locationEnd: $locationEnd
      leaveDate: $leaveDate
    ) {
      edges {
        node {
          id
          code
          leaveDate
          driverPhone
          adultTicket
          childTicket
          startStopName
          leaveTime
          endStopName
          directionId
          directionName
          bus {
            modelName
            seatCount
            transporter {
              name
            }
          }
          insurance {
            name
          }
          locationEnd {
            id
            distance
            estimatedDuration
            locationStop {
              id
              name
              location {
                id
                name
              }
            }
            locationEnd {
              id
              location {
                id
                name
              }
              type
              name
            }
          }
        }
      }
    }
  }
`;

export const BUS_SCHEDULES_DETAIL_QUERY = gql`
  query busSchedule($id: ID!) {
    busSchedule(id: $id) {
      id
      leaveDate
      leaveTime
      driverPhone
      adultTicket
      childTicket
      adultInsurance
      childInsurance
      startStopName
      directionName
      locationEnd {
        id
        distance
        estimatedDuration
        locationStop {
          id
          name
          location {
            id
            name
          }
        }
        locationEnd {
          id
          location {
            id
            name
          }
          type
          name
        }
      }
      bus {
        modelName
        seatCount
        plateNumber
        transporter {
          name
        }
      }
      insurance {
        name
      }
      seats {
        number
        isAvialable
      }
    }
  }
`;

export const MY_BOOKING_LIST_QUERY = gql`
  query busAllBookings {
    busAllBookings {
      edges {
        node {
          id
          toPay
          status
          statusName
          payment
          pax {
            firstName
            seat
          }
          createdAt
          schedule {
            adultTicket
            adultInsurance
            childTicket
            childInsurance
            leaveDate
            driverPhone
            leaveTime
            endStopName
            startStopName
            locationEnd {
              id
              distance
              estimatedDuration
              locationStop {
                id
                name
                location {
                  id
                  name
                }
              }
              locationEnd {
                id
                location {
                  id
                  name
                }
                type
                name
              }
            }
            bus {
              modelName
              seatCount
              plateNumber
              transporter {
                name
              }
            }
            insurance {
              name
            }
          }
          statusName
        }
      }
    }
  }
`;
