import React from "react"
import { Link, useParams } from "react-router-dom"
import { Card, CardImg } from "react-bootstrap"
import Rating from "./Rating"

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as="div">{product.discription}</Card.Text>

      <Card.Text as="div">
        <Rating value={product.rating} text={product.numReviews} />
      </Card.Text>
      <Card.Text as="h4">Rs.{product.price}</Card.Text>
    </Card>
  )
}

export default Product