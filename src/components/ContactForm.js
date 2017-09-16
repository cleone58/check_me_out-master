import React from 'react'

export default (props)=> {
  return (
    <form action="#" method="post" className="contact-form">
      <div className="col-sm-6 contact-form-left">
        <div className="form-group">
          <input name="name" type="text" className="form-control" id="name" placeholder="Name"/>
            <input type="email" name="email" className="form-control" id="mail" placeholder="Email"/>
          <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject"/>
        </div>
      </div>
      <div className="col-sm-6 contact-form-right">
        <div className="form-group">
          <textarea name="message" rows="6" className="form-control" id="comment" placeholder="Your message here..."></textarea>
          <button type="submit" className="button__submit" href="mailto:cleonejacobsr@gmail.com">Send</button>
        </div>
      </div>
    </form>
  )
}
