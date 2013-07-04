﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using NUnit.Framework;
using Streamus.Controllers;
using Streamus.Dao;
using Streamus.Domain;
using Streamus.Domain.Interfaces;
using Streamus.Dto;

namespace Streamus.Tests.Controller_Tests
{
    [TestFixture]
    public class PlaylistControllerTest : AbstractTest
    {
        private static readonly PlaylistController PlaylistController = new PlaylistController();
        private IStreamDao StreamDao { get; set; }

        /// <summary>
        ///     This code is only ran once for the given TestFixture.
        /// </summary>
        [TestFixtureSetUp]
        public new void TestFixtureSetUp()
        {
            try
            {
                StreamDao = DaoFactory.GetStreamDao();
            }
            catch (TypeInitializationException exception)
            {
                throw exception.InnerException;
            }
        }

        [Test]
        public void CreatePlaylist_PlaylistDoesntExist_PlaylistCreated()
        {
            PlaylistDto playlistDto = Helpers.CreatePlaylistDto();

            JsonDataContractActionResult result = (JsonDataContractActionResult)PlaylistController.Create(playlistDto);

            PlaylistDto createdPlaylistDto = (PlaylistDto) result.Data;

            //  Make sure we actually get a Playlist DTO back from the Controller.
            Assert.NotNull(createdPlaylistDto);

            NHibernateSessionManager.Instance.Clear();

            Stream stream = StreamDao.Get(createdPlaylistDto.StreamId);

            //  Make sure that the created playlist was cascade added to the Stream
            Assert.That(stream.Playlists.Count(p => p.Id == createdPlaylistDto.Id) == 1);
        }

    }
}
