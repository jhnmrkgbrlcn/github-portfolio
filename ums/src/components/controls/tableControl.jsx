import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import DeleteControl from "./deleteControl";
import ViewControl from "./viewControl";

const TableControl = ({
    headers,
    name,
    items,
    onSuccess,
}) => {
return (                                                                
    <>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                {
                    headers.map(item => {
                        return (<th>{item}</th>);
                    })
                }
                </tr>
            </thead>
            <tbody>     
                {
                    items.map(item => {
                        return (
                          <tr>
                            <td>{item.ID}</td>
                            <td>{item.description}</td>
                            <td>{item.time}</td>
                            <td>{item.date}</td>
                            <td>{item.user}</td>
                            <td>
                              <div className="d-flex d-sm-inline-flex">
                                  <span className=" ">
                                    <ViewControl 
                                      name="Log"
                                      id={item.ID}
                                      time={item.time}
                                      date={item.date}
                                      user={item.user}
                                      desc={item.description}
                                    />
                                  </span>
                                  <span className="d-flex d-sm-inline-flex ">
                                    <DeleteControl 
                                      title="Delete Log?" 
                                      desc="Deleting Log is permanent and cannot be undone"
                                      list={items}
                                      id={item.ID}
                                      onSuccess={onSuccess}
                                    />
                                  </span>
                                </div>
                              </td>
                            </tr>
                        );
                    })
                }
            </tbody>
            
        </table>
    </div>
    </>
  )}

export default TableControl;

TableControl.propTypes = {
    headers: PropTypes.any,
    name: PropTypes.string,
    items: PropTypes.any,
    onSuccess: PropTypes.func,
}