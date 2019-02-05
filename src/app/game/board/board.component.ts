import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: any;
  board1: any;

  constructor() {

    // lista2d
    // this.board =
    //   [
    //     [
    //       {
    //         id: 'A1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //       {
    //         id: 'A2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'A5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //       {
    //         id: 'A9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'A13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'A15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'B1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'B3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'B7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'B11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'B14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'B15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'C1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'C4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'C8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'C10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //       {
    //         id: 'C14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'C15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'D1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'D2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'D5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'D9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'D13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'D15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'E1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'E6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'E12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'E15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'F1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'F3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'F7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'F11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'F14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'F15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'G1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'G4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'G8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'G10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'G14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'G15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //     ],
    //
    //
    //     [
    //       {
    //         id: 'H1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //       {
    //         id: 'H2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'H5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H8',
    //         letter: '',
    //         img: '../../../assets/img/letters/W.png',
    //         fieldClass: 'middle'
    //       },
    //       {
    //         id: 'H9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'H13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'H15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'I1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'I4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'I8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'I10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'I14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'I15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       }
    //     ],
    //     [
    //       {
    //         id: 'J1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'J3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'J7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'J11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'J14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'J15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'K1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'K6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'K12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'K15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       }
    //     ],
    //     [
    //       {
    //         id: 'L1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'L2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'L5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'L9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'L13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'L15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'M1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'M4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'M8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'M10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //       {
    //         id: 'M14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'M15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'N1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'N3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'N7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter3'
    //       },
    //       {
    //         id: 'N11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'N14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word2'
    //       },
    //       {
    //         id: 'N15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //     ],
    //     [
    //       {
    //         id: 'O1',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //       {
    //         id: 'O2',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O3',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O4',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'O5',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O6',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O7',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O8',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //       {
    //         id: 'O9',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O10',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O11',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O12',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg letter2'
    //       },
    //       {
    //         id: 'O13',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O14',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg'
    //       },
    //       {
    //         id: 'O15',
    //         letter: '',
    //         img: null,
    //         fieldClass: 'bcg word3'
    //       },
    //     ],
    //   ];


    // lista1d
    this.board =
      [
        {
          id: 'A1',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'A2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A4',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'A5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A8',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'A9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A12',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'A13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'A15',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'B1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B2',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'B3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B6',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'B7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B10',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'B11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'B14',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'B15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C3',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'C4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C7',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'C8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C9',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'C10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C13',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'C14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'C15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D1',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'D2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D4',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'D5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D8',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'D9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D12',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'D13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'D15',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'E1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E5',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'E6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E11',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'E12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'E15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F2',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'F3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F6',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'F7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F10',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'F11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'F14',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'F15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G3',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'G4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G7',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'G8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G9',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'G10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G13',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'G14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'G15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H1',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'H2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H4',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'H5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H8',
          letter: '',
          img: '../../../assets/img/letters/W.png',
          fieldClass: 'middle'
        },
        {
          id: 'H9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H12',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'H13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'H15',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'I1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I3',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'I4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I7',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'I8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I9',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'I10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I13',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'I14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'I15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J2',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'J3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J6',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'J7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J10',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'J11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'J14',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'J15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K5',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'K6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K11',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'K12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'K15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L1',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'L2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L4',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'L5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L8',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'L9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L12',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'L13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'L15',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'M1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M3',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'M4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M7',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'M8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M9',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'M10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M13',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'M14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'M15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N1',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N2',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'N3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N4',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N6',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'N7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N8',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N10',
          letter: '',
          img: null,
          fieldClass: 'bcg letter3'
        },
        {
          id: 'N11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N12',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'N14',
          letter: '',
          img: null,
          fieldClass: 'bcg word2'
        },
        {
          id: 'N15',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O1',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'O2',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O3',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O4',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'O5',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O6',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O7',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O8',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
        {
          id: 'O9',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O10',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O11',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O12',
          letter: '',
          img: null,
          fieldClass: 'bcg letter2'
        },
        {
          id: 'O13',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O14',
          letter: '',
          img: null,
          fieldClass: 'bcg'
        },
        {
          id: 'O15',
          letter: '',
          img: null,
          fieldClass: 'bcg word3'
        },
      ];
  }

  ngOnInit() {
  }

}
