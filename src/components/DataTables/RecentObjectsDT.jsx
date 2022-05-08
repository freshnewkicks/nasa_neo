import '../../App.css';
import React, {useState} from 'react';


export default function RecentObjectsTable({loadingState, dataIn}) {
  const [changeMeasurement, setChangeMeasurement] = useState('ft');

  const handleMeasurementState = () => {
    if (changeMeasurement == 'ft') {
      return (
        setChangeMeasurement('km')
      );
    } else {
      return (
        setChangeMeasurement('ft')
      );
    }
  };
  return (
    <div>
      {!loadingState &&
      // eslint-disable-next-line max-len
            <div className="parent relative top-6 w-full flex justify-center items-center align-center">
              {/* eslint-disable-next-line max-len */}
              <div className="w-full flex justify-center items-center flex-wrap md:w-10/12 relative overflow-x-auto shadow-md sm:rounded-lg">
                {/* eslint-disable-next-line max-len */}
                <h3 className="w-full flex justify-center items-center align-center border-2">
                        Recent Objects
                </h3>
                {/* eslint-disable-next-line max-len */}
                <button type="button" onClick={ handleMeasurementState } className="flex flex-col flex-wrap text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue:700 focus:outline-none dark:focus:ring-blue-800">
                  { changeMeasurement == 'ft' ? 'Imperial' : 'Metric' }
                </button>
                {/* eslint-disable-next-line max-len */}
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  {/* eslint-disable-next-line max-len */}
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                                Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                                Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                                Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                                Hazardous?
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        {
                          // eslint-disable-next-line max-len
                                    changeMeasurement == 'ft' ? 'Estimated Max Diameter (ft)' : 'Estimated Max' +
                                        ' Diameter (km)'
                        }
                      </th>
                      <th>
                                Close Approach Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      // eslint-disable-next-line max-len
                      Object.keys(dataIn.near_earth_objects).sort().reverse().map( (i, k) => {
                        return (
                        // eslint-disable-next-line max-len
                          <tr key={k} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                            {/* eslint-disable-next-line max-len */}
                            <th key={k} scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              {i}

                            </th>
                            <td className="text-center">
                              {
                                dataIn.near_earth_objects[i][0].name
                              }
                            </td>
                            <td className="text-center">
                              {
                                dataIn.near_earth_objects[i][0].id
                              }
                            </td>
                            <td className="text-center">
                              {
                                // eslint-disable-next-line max-len
                                                dataIn.near_earth_objects[i][0].is_potentially_hazardous_asteroid ? <p className="text-md">Yes</p> : <p className="text-md">No</p>
                              }
                            </td>
                            <td>
                              {
                                // eslint-disable-next-line max-len
                                                changeMeasurement === 'ft' ? Math.round(dataIn.near_earth_objects[i][0].estimated_diameter.feet.estimated_diameter_max) + ' ft' : Math.round(dataIn.near_earth_objects[i][0].estimated_diameter.kilometers.estimated_diameter_max * 200) / 200 + ' km'
                              }
                            </td>
                            <td>
                              {
                                // eslint-disable-next-line max-len
                                                changeMeasurement === 'ft' ? Math.round(dataIn.near_earth_objects[i][0].close_approach_data[0].miss_distance.miles) + ' ft' : Math.round(dataIn.near_earth_objects[i][0].close_approach_data[0].miss_distance.kilometers * 100) / 100 + ' km'
                              }
                            </td>
                          </tr>

                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
      }
    </div>

  );
}
