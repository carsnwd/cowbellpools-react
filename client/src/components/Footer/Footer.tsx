import React from 'react'
import { Content, Footer } from 'trunx';

export default function Foot() {
    return (
      <Footer>
        <Content>
          <p>
            <strong>Trunx</strong> by{" "}
            <a href="http://g14n.info">Gianluca Casati</a>. The source code is
            licensed <a href="http://g14n.info/mit-license">MIT</a>.
          </p>
        </Content>
      </Footer>
    );
}
