import React, { Component } from 'react'
// import Nav from './presentation'

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

    render() {
      return(

          <div>
            <div className="nav-container">
            </div>

            <div className="main-container">
                <section className="space-sm">
                    <div className="container align-self-start">
                        <div className="row mb-5">
                            <div className="col text-center">
                                
                            </div>

                        </div>

                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-7">
                                <div className="card card-lg text-center">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <h2 className="mb-2">Reset password</h2>
                                            <span>Enter email address to reset password</span>
                                        </div>
                                        <div className="row no-gutters justify-content-center">
                                            <form className="text-left col-lg-8">
                                                <div className="form-group">
                                                    <label for="reset-email">Email Address</label>
                                                    <input className="form-control form-control-lg" type="email" name="email" id="reset-email" placeholder="Email Address" />
                                                </div>
                                                <div className="text-center mb-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Reset password</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </div>


          </div>



      )
  }
}

export default Home
